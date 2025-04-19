import React from 'react';

interface PDFViewerProps {
    data: {
        url: string;
    };
    credits?: boolean | null;
    showSidebar?: boolean | null;
    showToolbar?: boolean | null;
    showControls?: {
        navigation?: boolean;
        zoom?: boolean;
        fullscreen?: boolean;
        download?: boolean;
        info?: boolean;
    };
    responsive?: {
        mobileBreakpoint?: number;
        hideSidebarOnMobile?: boolean;
        reduceToolbarOnMobile?: boolean;
    };
}
declare const AdexViewer: React.FC<PDFViewerProps>;

export { AdexViewer };
