import { CheckboxType } from "@/components/ui/checkbox";

export const useOptionList = (
  list: CheckboxType[],
  update: (list: CheckboxType[]) => void
): [
  boolean,
  () => void,
  () => void,
  (value: string, index: number) => void
] => {
  const isCanAllSelectLang = !list.every((item) => item.checked);

  const handleSelectAll = () => {
    const temp = [...list];
    temp.forEach((item) => (item.checked = true));
    update(temp);
  };

  const handleDeselectAllLang = () => {
    const temp = [...list];
    temp.forEach((item) => (item.checked = false));
    update(temp);
  };

  const handleChangeOption = (value: string, index: number) => {
    const temp = [...list];
    temp[index].checked = !temp[index].checked;
    update(temp);
  };

  return [
    isCanAllSelectLang,
    handleSelectAll,
    handleDeselectAllLang,
    handleChangeOption,
  ];
};
