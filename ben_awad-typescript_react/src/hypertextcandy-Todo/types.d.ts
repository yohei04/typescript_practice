type Item = {
  key: string;
  text: string;
  done: boolean;
};

type ToggleItem = (selectedItem) => void
