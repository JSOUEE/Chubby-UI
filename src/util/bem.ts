import cls from 'classnames';

type Modifiers = Record<string, boolean | string>;
type ClsArgs = string | Record<string, boolean> | undefined;

export const useBEM = (block: string) => (
  modifiersOrElement?: Modifiers | string,
  element?: string,
): string => {
  let prefix = block;

  if (typeof modifiersOrElement === 'string') {
    return `${prefix}-${modifiersOrElement}`;
  } else {
    const modifiers = (modifiersOrElement || {}) as Modifiers;

    prefix = typeof element === 'string' ? `${prefix}-${element}` : prefix;
    const mods = Object.keys(modifiers).reduce((accu, key) => {
      const val = modifiers[key];

      if (typeof val === 'string') {
        accu[`${prefix}__${val}`] = true;
      } else {
        accu[`${prefix}__${key}`] = val;
      }

      return accu;
    }, {} as Record<string, boolean>);

    return cls(prefix, mods);
  }
};
