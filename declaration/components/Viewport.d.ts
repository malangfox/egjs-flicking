import Flicking from "../Flicking";
import Panel from "./Panel";
import PanelManager from "./PanelManager";
import StateMachine from "./StateMachine";
import MoveType from "../moves/MoveType";
import { FlickingOptions, FlickingPanel, FlickingStatus, ElementLike, EventType, TriggerCallback, Plugin, DestroyOption } from "../types";
export default class Viewport {
    options: FlickingOptions;
    stateMachine: StateMachine;
    panelManager: PanelManager;
    moveType: MoveType;
    private flicking;
    private axes;
    private panInput;
    private viewportElement;
    private cameraElement;
    private triggerEvent;
    private axesHandlers;
    private currentPanel;
    private nearestPanel;
    private plugins;
    private state;
    constructor(flicking: Flicking, options: FlickingOptions, triggerEvent: Flicking["triggerEvent"]);
    moveTo(panel: Panel, destPos: number, eventType: EventType["CHANGE"] | EventType["RESTORE"] | "", axesEvent: any, duration?: number): TriggerCallback;
    moveCamera(pos: number, axesEvent?: any): void;
    stopCamera: (axesEvent: any) => void;
    resize(): void;
    findNearestPanel(): Panel | undefined;
    findNearestPanelAt(position: number): Panel | undefined;
    findNearestIdenticalPanel(panel: Panel): Panel;
    findShortestPositionToPanel(panel: Panel): number;
    findEstimatedPosition(panel: Panel): number;
    enable(): void;
    disable(): void;
    insert(index: number, element: ElementLike | ElementLike[]): FlickingPanel[];
    replace(index: number, element: ElementLike | ElementLike[]): FlickingPanel[];
    remove(index: number, deleteCount?: number): FlickingPanel[];
    updateAdaptiveSize(): void;
    destroy(option: Partial<DestroyOption>): void;
    restore(status: FlickingStatus): void;
    getCurrentPanel(): Panel | undefined;
    getCurrentIndex(): number;
    getNearestPanel(): Panel | undefined;
    getCurrentProgress(): number;
    updateAxesPosition(position: number): void;
    getSize(): number;
    getScrollArea(): {
        prev: number;
        next: number;
    };
    isOutOfBound(): boolean;
    canSetBoundMode(): boolean;
    getViewportElement(): HTMLElement;
    getCameraElement(): HTMLElement;
    getScrollAreaSize(): number;
    getRelativeHangerPosition(): number;
    getHangerPosition(): number;
    getCameraPosition(): number;
    getCheckedIndexes(): Array<[number, number]>;
    setCurrentPanel(panel: Panel): void;
    setLastIndex(index: number): void;
    connectAxesHandler(handlers: {
        [key: string]: (event: {
            [key: string]: any;
        }) => any;
    }): void;
    addPlugins(plugins: Plugin | Plugin[]): this;
    removePlugins(plugins: Plugin | Plugin[]): this;
    updateCheckedIndexes(changedRange: {
        min: number;
        max: number;
    }): void;
    private build();
    private setElements();
    private applyCSSValue();
    private setMoveType();
    private setAxesInstance();
    private createPanels();
    private setDefaultPanel();
    private clonePanels();
    private moveToDefaultPanel();
    private updateSize();
    private updateOriginalPanelPositions();
    private updateClonedPanelPositions();
    private updateScrollArea();
    private updateCameraPosition();
    private updatePlugins();
    private checkNeedPanel(axesEvent?);
    private triggerNeedPanel(params);
}