import { AnnotationCategory } from "./annotationCategory";

export class Annotation {

    constructor() {
        this.category = new AnnotationCategory();
    }
    
    id: string;
    taskId: number;
    annotatorSchemaVersion: string;
    text: string;
    quote: string;
    uri: string;
    ranges: Range[];
    user: string;
    consumer: string;
    category: AnnotationCategory;
    isBodyCollapsed: boolean;
}

export class Range {
    start: string;
    end: string;
    startOffset: string;
    endOffset: string;
}