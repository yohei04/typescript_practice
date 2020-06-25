type Item = {
  key: string;
  text: string;
  done: boolean;
};

type ToggleItem = (selectedItem: Item) => void;

type AddItem = (text: string) => void;

type HandleFilterChange = (value: string) => void;
