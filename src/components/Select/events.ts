import React from 'react';

const isExpanded = (combobox: HTMLElement) =>
  combobox.getAttribute('aria-expanded') === 'true';

const getSelectedOption = (combobox: HTMLElement) => {
  const listbox = combobox.nextElementSibling;
  // @ts-ignore
  for (const option of listbox!.children) {
    if (option.getAttribute('aria-selected') === 'true') return option;
  }
};

const getActiveOption = (combobox: HTMLElement) => {
  const listbox = combobox.nextElementSibling;
  const id = combobox.getAttribute('aria-activedescendant');
  if (!id) return;
  // @ts-ignore
  for (const option of listbox.children) {
    if (option.id === id) return option;
  }
};

const activateOption = (option: HTMLElement) => {
  const combobox = option.parentElement!.previousElementSibling as HTMLElement;
  const current = getActiveOption(combobox);
  if (current && current.id === option.id) return;
  if (current) current.classList.remove('active');
  combobox!.setAttribute('aria-activedescendant', option.id);
  option.classList.add('active');
};

const clearActive = (combobox: HTMLElement) => {
  const current = getActiveOption(combobox);
  if (current) current.classList.remove('active');
  combobox.removeAttribute('aria-activedescendant');
};

const setExpanded = (combobox: HTMLElement, expanded: boolean) => {
  const listbox = combobox.nextElementSibling;
  if (expanded) {
    if (isExpanded(combobox)) return;
    const selected = getSelectedOption(combobox) || listbox!.firstElementChild;
    combobox.setAttribute('aria-expanded', 'true');
    activateOption(selected);
  } else {
    combobox.setAttribute('aria-expanded', 'false');
    clearActive(combobox);
  }
};

const selectOption = (option: HTMLElement) => {
  const combobox = option.parentElement!.previousElementSibling,
    listbox = combobox!.nextElementSibling,
    hidden = combobox!.parentElement!.previousElementSibling;

  if (option.getAttribute('aria-selected') === 'true') return;

  hidden!.setAttribute('value', option.getAttribute('data-value')!);

  // @ts-ignore
  for (const opt of listbox!.children) {
    const selected = opt.id === option.id;
    opt.setAttribute('aria-selected', String(selected));
  }
  combobox!.textContent = option.textContent;
};

export const onLabelMouseDown = (
  event: React.MouseEvent<HTMLLabelElement, MouseEvent>
) => {
  const combobox = event.currentTarget.parentElement!.lastElementChild!
    .firstElementChild as HTMLElement;
  if (combobox !== null && !isExpanded(combobox)) {
    combobox.blur();
  }
};

export const onLabelMouseUp = (
  event: React.MouseEvent<HTMLLabelElement, MouseEvent>
) => {
  const combobox = event.currentTarget.parentElement!.lastElementChild!
    .firstElementChild as HTMLElement;
  combobox.focus();
};

export const onComboboxKeyDown = (
  event: React.KeyboardEvent<HTMLDivElement>
) => {
  const combobox = event.currentTarget,
    listbox = combobox.nextElementSibling as HTMLElement;

  switch (event.key) {
    case ' ':
      setExpanded(combobox, true);
      break;
    case 'Escape':
      setExpanded(combobox, false);
      break;
    case 'Tab':
      if (!isExpanded(combobox)) return; // don't prevent focus movement
      setExpanded(combobox, false);
      break;
    case 'Enter':
      if (isExpanded(combobox)) {
        const active = getActiveOption(combobox);
        if (active) {
          selectOption(active);
          setExpanded(combobox, false);
        }
      }
      break;
    case 'ArrowDown':
      if (isExpanded(combobox)) {
        activateOption(
          getActiveOption(combobox)?.nextElementSibling ||
            listbox.firstElementChild
        );
      } else {
        selectOption(
          getSelectedOption(combobox).nextElementSibling ||
            listbox.firstElementChild
        );
      }
      break;
    case 'ArrowUp':
      if (isExpanded(combobox)) {
        activateOption(
          getActiveOption(combobox)?.previousElementSibling ||
            listbox.lastElementChild
        );
      } else {
        selectOption(
          getSelectedOption(combobox).previousElementSibling ||
            listbox.lastElementChild
        );
      }
      break;
    case 'ArrowRight':
      if (!isExpanded(combobox)) {
        selectOption(
          getSelectedOption(combobox).nextElementSibling ||
            listbox.firstElementChild
        );
      }
      break;
    case 'ArrowLeft':
      if (!isExpanded(combobox)) {
        selectOption(
          getSelectedOption(combobox).previousElementSibling ||
            listbox.lastElementChild
        );
      }
      break;
    case 'End':
    case 'PageDown':
      if (isExpanded(combobox)) {
        activateOption(listbox.lastElementChild! as HTMLElement);
      } else {
        selectOption(listbox.lastElementChild! as HTMLElement);
      }
      break;
    case 'Home':
    case 'PageUp':
      if (isExpanded(combobox)) {
        activateOption(listbox.firstElementChild! as HTMLElement);
      } else {
        selectOption(listbox.firstElementChild! as HTMLElement);
      }
      break;
    default:
      return;
  }
  event.preventDefault();
};

export const onComboboxMouseDown = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>
) => {
  const combobox = event.currentTarget;
  setExpanded(combobox, !isExpanded(combobox));
};

export const onListboxMouseLeave = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>
) => {
  clearActive(event.currentTarget.previousElementSibling! as HTMLElement);
};

export const onOptionClick = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>
) => {
  const option = event.currentTarget,
    combobox = option.parentElement!.previousElementSibling as HTMLElement;

  setExpanded(combobox, false);
  if (option.getAttribute('aria-selected') === 'true') return;
  selectOption(option);
};

export const onOptionMouseOver = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>
) => {
  activateOption(event.currentTarget);
};
