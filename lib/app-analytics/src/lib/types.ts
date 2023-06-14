/**
 * Properties needed to capture analytics.
 *
 * @param event The event type
 * @param type The analytics type
 * @param metadata Metadata to add in the event
 */
export interface TrackEventProps {
  event: string;
  eventType: EventType;
  eventAction: EventAction;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  metadata?: Record<string, any>;
}

export const enum EventType {
  // Add supported event types below.
  GoogleTagManager,
}

export const enum EventAction {
  // Add supported event action below.
  Click = 'click',
  Event = 'event',
  PageView = 'pageview',
}
