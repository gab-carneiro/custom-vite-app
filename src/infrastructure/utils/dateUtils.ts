import { format as formatter } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export const dateFormat = (date: Date, format = 'dd/MM/yyyy'): string => {
  return formatter(date, format, {
    locale: ptBR,
  });
};
