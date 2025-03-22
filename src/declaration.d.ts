declare module "./AdexViewer" {
    const PdfViewer: React.ComponentType<any>;
    export default PdfViewer;
}

declare module "*.module.scss" {
    const classes: { [key: string]: string };
    export default classes;
  }