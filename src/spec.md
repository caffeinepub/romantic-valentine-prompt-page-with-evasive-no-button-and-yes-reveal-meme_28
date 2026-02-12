# Specification

## Summary
**Goal:** Revamp the Valentine experience into a kawaii, viral, multi-screen flow with a redesigned Screen 1, a new Screen 2 with gifts, and three animated gift views.

**Planned changes:**
- Redesign Screen 1 with a soft pastel pink gradient background, heart doodle decorations, rounded corners, soft shadows, and clean minimal typography; ensure fully responsive centered layout.
- Update Screen 1 content: add a “14 FEB” calendar icon in a top corner, add bunny/heart sticker visuals near the heading, and set centered copy to exactly “Hey there,\nWill you be my Valentine?”.
- Replace Screen 1 actions with exactly two rounded buttons: “YES OF COURSE” (slightly larger/more inviting) and “NO THANK YOU”.
- Preserve/adapt the evasive “NO THANK YOU” behavior to move away on hover (desktop) and tap/press attempt (touch) while staying within visible bounds.
- Replace the post-YES meme with Screen 2 showing exact headline text “Yay, you said yes!\nI made all these for you hehe”, an animated heart character on the left, and three large rounded gift cards labeled “Gift 1”, “Gift 2”, “Gift 3”, with smooth transitions and pop animations.
- Implement Gift 1 view (screen or modal): centered rose bouquet with ribbon, four exact message bubbles around it, plus floating hearts animation.
- Implement Gift 2 view (screen or modal): cute card UI containing a short sweet/simple/emotional love letter, with sparkles and small hearts decorations/animations.
- Implement Gift 3 view (screen or modal): show exact lines “Happy Valentine’s Day ❤️” and “You’re my favorite person”, with a heart burst animation and confetti hearts animation.
- Add clear navigation/close controls for each gift view to return to Screen 2 with consistent smooth transitions.
- Add all newly required decorative/illustration assets as static files under `frontend/public/assets/generated` and reference them via static paths from the frontend.

**User-visible outcome:** Users see a cute responsive Valentine landing screen with playful evasive “NO THANK YOU”; choosing “YES OF COURSE” opens a new gift hub with three tappable gifts, each opening an animated, themed gift view that can be closed to return to the gift hub.
