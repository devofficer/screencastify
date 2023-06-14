import TagManager from 'react-gtm-module';
import { EventType, TrackEventProps } from './types';

/**
 * Creates and sends the event for analytics.
 *
 * @param props Event properties to be captured.
 */
export const trackEvent = (props: TrackEventProps) => {
  if (props.eventType === EventType.GoogleTagManager) {
    TagManager.dataLayer({
      dataLayer: {
        event: props.event,
        action: props.eventAction,
        metadata: props.metadata,
      },
    });
  }
};
