// Global type declarations for external libraries

declare function html2canvas(
  element: HTMLElement,
  options?: {
    scale?: number;
    useCORS?: boolean;
    logging?: boolean;
    backgroundColor?: string;
    width?: number;
    height?: number;
  }
): Promise<HTMLCanvasElement>;

interface Window {
  jspdf: {
    jsPDF: new (options?: {
      orientation?: 'portrait' | 'landscape';
      unit?: 'mm' | 'pt' | 'px' | 'in';
      format?: string | [number, number];
    }) => jsPDF;
  };
  switchAuxLanguage: (lang: string) => void;
  filterAuxModels: () => void;
}

interface jsPDF {
  addImage(
    imageData: string,
    format: string,
    x: number,
    y: number,
    width: number,
    height: number
  ): void;
  addPage(): void;
  save(filename: string): void;
}
