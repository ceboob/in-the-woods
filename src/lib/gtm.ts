export type DataLayerEvent = {
  event: string;
  [key: string]: string | number | boolean | null | undefined;
};

declare global {
  interface Window {
    dataLayer?: DataLayerEvent[];
  }
}

export const pushToDataLayer = (payload: DataLayerEvent) => {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
};
