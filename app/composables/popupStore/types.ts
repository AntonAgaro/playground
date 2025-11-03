
export interface PopupStore {
  activePopup: {
    popupName: PopupName | null;
    params?: PopupParams[PopupName] | null;
  };
  popupQueue: { popupName: PopupName; params?: PopupParams[PopupName] }[];
}

export enum PopupName {
  Test = 'test',
}
export type PopupParams = {
  [PopupName.Test]: undefined;

};

