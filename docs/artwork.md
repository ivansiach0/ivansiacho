# Opening artwork

The Opening uses original artwork generated with the built-in image generation
tool. The figure is a conceptual portrait, not a verified likeness of Ivan.
The visible footer identifies that distinction. No client interface or game
artwork is represented as an original professional deliverable.

The project-local delivery asset is `public/images/night-city.webp`, encoded from
the generated PNG as WebP at quality 88. No external image service is needed at
runtime. Text, controls, and image-failure fallback are authored in the application.

## Generation prompt

Use case: stylized-concept. Asset type: original full-bleed panoramic artwork for a senior frontend engineer's personal portfolio, landscape 16:9. A stunning atmospheric northern waterfront metropolis at late blue hour, seen from a high rooftop, with a richly detailed skyline in middle distance, slender office towers with tiny warm windows, a river curving away between buildings, cool teal architectural light and subtle amber highlights, dark deep indigo sky, soft layered atmospheric haze. At the far right foreground is a conceptual anonymous male engineer avatar in a dark jacket, half-length back/three-quarter view looking toward the city, face only a very small unidentifiable side silhouette. It is an imaginary avatar, NOT a likeness of a real person. Premium hand-painted editorial game concept art, sophisticated ink and gouache textures, strong architectural draftsmanship, cinematic and immersive, beautiful restrained teal / midnight navy / warm amber palette, no purple neon. City fills right 70 percent, left 35 percent quiet dark blue negative space for text overlay. Skyline horizon at vertical midpoint. No type, no lettering, no watermark, no logos, no game brands, no computer UI. Original scene, not a replica of any GTA artwork. Output a single wide illustration.

## Layered transition assets

The owner requested separate city and figure layers during the transition design.
The built-in image generation tool edited the original into a reconstructed clean
city plate and a transparent conceptual figure, preserving their shared 1672 by
941 canvas. These edits have small generative variations rather than claiming
pixel-identical segmentation. The original flattened WebP remains available.

Production assets are `public/images/city-background.webp` (207,596 bytes) and
`public/images/figure.webp` (34,988 bytes, with alpha). They use identical framing
before independent transforms. The figure's transparent background is preserved.
The complete edit prompts and source inspection are in the
[artwork study](../.scratch/opening-transition/artwork/README.md).
