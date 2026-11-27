import { useCallback, useLayoutEffect, useRef } from 'react';
import type { MouseEvent, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useOpeningTransition(page: RefObject<HTMLDivElement | null>) {
  const skip = useRef<(() => void) | null>(null);

  useLayoutEffect(() => {
    const root = page.current!;
    const header = root.querySelector<HTMLElement>('[data-opening-header]')!;
    const stage = root.querySelector<HTMLElement>('[data-opening-stage]')!;
    const intro = root.querySelector<HTMLElement>('[data-opening-intro]')!;
    const content = root.querySelector<HTMLElement>('[data-opening-content]')!;
    const bridge = root.querySelector<HTMLElement>('[data-experience-bridge]')!;
    const bridgeContent = root.querySelector<HTMLElement>('[data-bridge-content]')!;
    const destination = root.querySelector<HTMLElement>('#selected-experience')!;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let context: gsap.Context | undefined;
    let timeline: gsap.core.Timeline | undefined;
    let trigger: ScrollTrigger | undefined;
    let frame = 0;
    let focusFrame = 0;
    let signature = '';

    const keepFocusedContentVisible = () => {
      const element = document.activeElement;
      if (!(element instanceof HTMLElement) || !root.contains(element) || header.contains(element)) return;
      if (bridge.contains(element) && Number(getComputedStyle(bridge).opacity) < 0.5) return;
      const bounds = element.getBoundingClientRect();
      const top = root.dataset.contact === 'sticky' ? header.getBoundingClientRect().bottom : 0;
      if (bounds.top < top || bounds.bottom > window.innerHeight) {
        element.scrollIntoView({ block: 'start', behavior: 'instant' });
        ScrollTrigger.update();
      }
    };

    const afterRefresh = () => {
      cancelAnimationFrame(focusFrame);
      focusFrame = requestAnimationFrame(keepFocusedContentVisible);
    };

    const reset = () => {
      context?.revert();
      context = undefined;
      timeline = undefined;
      trigger = undefined;
      root.dataset.motion = 'static';
      // The timeline's initial set must not leak into the static presentation.
      bridge.style.removeProperty('opacity');
      bridge.style.removeProperty('transform');
      bridge.style.removeProperty('pointer-events');
    };

    const rebuild = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const headerHeight = header.getBoundingClientRect().height;
      const nextSignature = [width, height, headerHeight, content.scrollHeight, bridgeContent.scrollHeight, reducedMotion.matches].join(':');
      if (signature === nextSignature) return;
      signature = nextSignature;
      const previousProgress = trigger?.progress ?? 0;
      const wasInRange = trigger && window.scrollY >= trigger.start && window.scrollY <= trigger.end;
      const focusedElement = document.activeElement;
      const focusWasVisible = focusedElement instanceof HTMLElement && root.contains(focusedElement)
        && (!bridge.contains(focusedElement) || Number(getComputedStyle(bridge).opacity) > 0.5);
      const restoreFocus = () => {
        if (!(focusedElement instanceof HTMLElement) || !root.contains(focusedElement)) return;
        if (document.activeElement !== focusedElement) focusedElement.focus({ preventScroll: true });
        if (focusWasVisible) keepFocusedContentVisible();
      };
      reset();

      const stickyContact = headerHeight < height * 0.4;
      root.dataset.contact = stickyContact ? 'sticky' : 'flow';
      root.style.setProperty('--scene-height', `${Math.max(0, height - headerHeight)}px`);
      root.style.setProperty('--focus-offset', `${stickyContact ? headerHeight + 24 : 24}px`);
      const availableHeight = height - headerHeight;
      const introFits = intro.scrollHeight <= availableHeight + 2;
      const bridgeFits = bridge.scrollHeight <= availableHeight + 2;
      if (reducedMotion.matches || !stickyContact || availableHeight < 320 || !introFits || !bridgeFits) {
        restoreFocus();
        return;
      }

      root.dataset.motion = 'enhanced';
      context = gsap.context(() => {
        timeline = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: stage,
            pin: stage,
            start: `top ${headerHeight}`,
            end: `+=${height * (width <= 700 ? 0.65 : 1)}`,
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
        timeline
          .set(bridge, { opacity: 0, y: 32, pointerEvents: 'none' })
          .fromTo('[data-opening-city]', { scale: 1.1 }, { scale: 1, duration: 1 }, 0)
          .fromTo('[data-opening-figure]', { scale: 1.04, transformOrigin: '100% 100%' }, { scale: 1, duration: 1 }, 0)
          .to('[data-opening-copy]', { opacity: 0, y: -12, duration: 0.25 }, 0.1)
          .to('[data-opening-name]', { opacity: 0, y: -16, duration: 0.3 }, 0.25)
          .to('[data-opening-veil]', { opacity: 1, duration: 0.45 }, 0.4)
          .set(bridge, { pointerEvents: 'auto' }, 0.7)
          .to(bridge, { opacity: 1, y: 0, duration: 0.3 }, 0.7);
        trigger = timeline.scrollTrigger;
      }, root);
      trigger?.refresh();
      if (wasInRange && trigger) {
        window.scrollTo({ top: trigger.start + previousProgress * (trigger.end - trigger.start), behavior: 'instant' });
      }
      ScrollTrigger.update();
      restoreFocus();
    };

    const scheduleRebuild = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(rebuild);
    };

    skip.current = () => {
      if (trigger && timeline) {
        window.scrollTo({ top: trigger.end, behavior: 'instant' });
        timeline.progress(1);
        ScrollTrigger.update();
      } else {
        destination.scrollIntoView({ block: 'start', behavior: 'instant' });
      }
      destination.focus({ preventScroll: true });
    };

    const observer = new ResizeObserver(scheduleRebuild);
    observer.observe(header);
    observer.observe(content);
    observer.observe(bridgeContent);
    window.addEventListener('resize', scheduleRebuild);
    reducedMotion.addEventListener('change', scheduleRebuild);
    ScrollTrigger.addEventListener('refresh', afterRefresh);
    rebuild();

    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(focusFrame);
      observer.disconnect();
      window.removeEventListener('resize', scheduleRebuild);
      reducedMotion.removeEventListener('change', scheduleRebuild);
      ScrollTrigger.removeEventListener('refresh', afterRefresh);
      reset();
      delete root.dataset.contact;
      root.style.removeProperty('--scene-height');
      root.style.removeProperty('--focus-offset');
      skip.current = null;
    };
  }, [page]);

  return useCallback((event: MouseEvent<HTMLAnchorElement>) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (!skip.current) return;
    event.preventDefault();
    skip.current();
  }, []);
}
