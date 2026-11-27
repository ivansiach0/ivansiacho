# Layered Opening artwork study

Two project-local image edits prepared with the built-in image generation tool,
using the existing Opening illustration as the reference. The published Opening
and its original WebP remain unchanged.

- `city-background.png`: city, mountains, river, rooftop, and railing without
  the figure. The previously occluded environment is reconstructed.
- `figure.png`: conceptual figure on genuine transparency, retaining the full
  canvas and its lower-right placement for superimposition.
- `asset-metadata.json`: canvas and transparency inspection results.
- `preview.html`: design-only browser composition, superimposing the two plates.
- `layered-preview.jpg`: browser screenshot of the aligned layers.

Both assets measure 1672 by 941 pixels. The figure PNG has an alpha channel,
1,451,947 fully transparent pixels, and visible bounds confined to the expected
lower-right region. Browser inspection confirmed identical rendered rectangles
for both layers, with no opaque matte or displaced canvas.

The edits preserve the visual composition but are generative reconstructions,
not a pixel-identical segmentation of the original illustration. The figure
continues to be conceptual and is not a verified likeness of Ivan.

## Background edit prompt

Edit target: the attached original nighttime city illustration. Create a clean background plate for layered website animation. Remove ONLY the man standing at the far-right foreground. Reconstruct the portions of the skyline, river, rooftop/parapet, and railing that his body obscured, seamlessly matching perspective, architectural detail, painted texture, amber rim lighting, navy and teal palette, and atmospheric haze. Preserve every other part of the image as closely as possible: original camera, composition, mountains, existing buildings, left dark negative space, railing, exposure and colors. Keep the entire original 16:9 canvas and exact spatial framing; do not crop, zoom, reframe, add text, or invent another person. The output must be the city/environment alone, including the rooftop and continuous railing, with no trace of the removed figure. This plate will be overlaid with the original-position character cutout.

## Figure extraction prompt

Edit target: the attached original nighttime city illustration. Extract ONLY the existing man at the far-right foreground as a clean RGBA transparent layer for compositing. Preserve the man's exact original scale, right-edge position, pose, jacket folds, silhouette, hair strands, navy shading and delicate amber rim lighting. Preserve the original full 16:9 canvas framing, with the man occupying exactly the same far-right lower region as in the input. Everything other than the man must be truly transparent: remove all city, sky, mountains, water, rooftop, railing and scenery. Do not include any railing or parapet in the cutout. Keep the existing cropped body boundaries at the bottom/right of the source canvas; do not invent missing anatomy or recenter the man. Do not add a shadow, colored matte, visible checkerboard, text or watermark. Deliver a transparent PNG-style image, NOT a new portrait or a reinterpretation.
