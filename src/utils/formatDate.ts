interface DateTimeFormatOptions {
  timeStyle: string;
  dateStyle: string;
}
const formatDate = (date: Date): string => {
  const options: any = {
    timeStyle: 'medium',
    dateStyle: 'short',
  }
  return Intl.DateTimeFormat('pt-BR', options).format(new Date(date));
};

export default formatDate;
