export const YMapsQuery = {
    apikey: '6e71952c-f0be-4891-8c47-e015f6f08b18',
    suggest_apikey: '6e71952c-f0be-4891-8c47-e015f6f08b18',
};

export const MapState = {
    style: {
        height: '350px',
        width: '100%',
        borderRadius: '12px',
        overflow: 'hidden',
    },
    defaultState: { controls: ['zoomControl', 'fullscreenControl'] },
    modules: ['control.ZoomControl', 'control.FullscreenControl', 'control.RoutePanel'],
};
