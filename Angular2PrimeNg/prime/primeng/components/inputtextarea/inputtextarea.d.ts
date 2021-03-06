import { ElementRef, OnInit } from 'angular2/core';
export declare class InputTextarea implements OnInit {
    private el;
    autoResize: boolean;
    rows: number;
    cols: number;
    hover: boolean;
    focus: boolean;
    rowsDefault: number;
    colsDefault: number;
    constructor(el: ElementRef);
    ngOnInit(): void;
    onMouseover(e: any): void;
    onMouseout(e: any): void;
    onFocus(e: any): void;
    onBlur(e: any): void;
    isDisabled(): any;
    onKeyup(e: any): void;
    resize(): void;
}
