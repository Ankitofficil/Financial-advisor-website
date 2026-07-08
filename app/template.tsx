import { ViewTransition } from "react";

/**
 * Remounts on every route navigation, so the outgoing page gets the
 * `page-exit` animation and the incoming page gets `page-enter`
 * (see the view-transition rules in globals.css). The header is
 * anchored separately via `viewTransitionName: site-header`.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition enter="page-enter" exit="page-exit">
      {children}
    </ViewTransition>
  );
}
