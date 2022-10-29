import { DOMAttributes, FC } from 'react';

import cn from 'classnames';

import styles from './styles.module.scss';
import { TableRow as TableRowProps } from '.';

export type Props = DOMAttributes<HTMLTableRowElement> & {
  row: TableRowProps<any>;
  className?: string;
  isHover?: boolean;
};

export const TableRow: FC<Props> = ({
  row,
  className,
  onClick,
  isHover = true,
  ...rProps
}) => (
  <tr
    {...rProps}
    {...row.getRowProps({
      className: cn(styles.tr, { [styles.trHover]: isHover }, className),
    })}
    onClick={onClick}
  >
    {row.cells.map((cell) => (
      /**
       * Key pass from getCellProps function
       */
      // eslint-disable-next-line react/jsx-key
      <td
        {...cell.getCellProps({
          className: styles.td,
        })}
        style={{
          width: cell.column.width,
          minWidth: cell.column.minWidth,
          maxWidth: cell.column.maxWidth,
        }}
        key={cell.column.id}
      >
        {cell.render('Cell')}
      </td>
    ))}
  </tr>
);
