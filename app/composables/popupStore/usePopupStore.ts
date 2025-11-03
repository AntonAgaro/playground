import type { PopupStore, PopupName, PopupParams } from '~/composables/stores/popupStore/types';
export function usePopupStore() {
  const popupStore = useState<PopupStore>('popup-store', () => ({
    activePopup: { popupName: null, params: null },
    popupQueue: [],
  }));

  const getActivePopup = computed<{ popupName: PopupName | null; params?: PopupParams[PopupName] | null }>(
    () => popupStore.value.activePopup
  );
  const setActivePopup = (popupName: PopupName | null, params?: PopupParams[PopupName]) => {
    popupStore.value.activePopup = { popupName: popupName, params: params || null };
  };

  const showPopup = (popupName: PopupName, params?: PopupParams[PopupName]) => {
    if (popupName === popupStore.value.activePopup.popupName) {
      return;
    }

    if (!popupStore.value.activePopup.popupName) {
      setActivePopup(popupName, params);
    } else {
      popupStore.value.popupQueue.push({ popupName: popupName, params: params });
    }
  };

  const showPopupHard = (popupName: PopupName, params?: PopupParams[PopupName]) => {
    // Открываем попап вне очереди заменяя текущий активный
    // Не добавляем в popupQueue ничего
    // Поскольку текущий открытый попап не находится в popupQueue, то мы не нуждаемся popupQueue.value.shift()
    // В итоге мы никак не изменяем popupQueue и если в очереди поппапов есть модалки, то они там и останутся
    setActivePopup(popupName, params);
  };
  const closePopup = () => {
    popupStore.value.popupQueue.shift();
    setActivePopup(null);

    if (popupStore.value.popupQueue.length > 0) {
      const popup = popupStore.value.popupQueue.shift();
      if (popup) {
        setActivePopup(popup.popupName, popup.params);
      }
    }
  };

  return {
    showPopup,
    showPopupHard,
    closePopup,
    getActivePopup,
  };
}
