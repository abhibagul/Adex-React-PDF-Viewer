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
        sidebarButton?: boolean;
        rotation?: boolean;
        print?: boolean;
        search?: boolean;
        bookmarks?: boolean;
        annotations?: boolean;
        localization?: boolean;
    };
    defaultValues?: {
        zoom?: number;
        page?: number;
        fullscreen?: boolean;
    };
    localization?: LocalizationOptions[] | null;
    responsive?: {
        mobileBreakpoint?: number;
        hideSidebarOnMobile?: boolean;
        reduceToolbarOnMobile?: boolean;
    };
    textOptions?: {
        enableSelection?: boolean;
        enableCopy?: boolean;
    };
    printOptions?: {
        printBackground?: boolean;
        pageRangeEnabled?: boolean;
    };
    theme?: string | null;
}
interface LocalizationOptions {
    locale: string;
    title: string;
    active: boolean;
}
declare const AdexViewer: React.FC<PDFViewerProps>;

export { AdexViewer };
