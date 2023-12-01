import { forwardRef, useState } from "react";
import { TimeSvg } from "../../public/assets/svgs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { compareAsc, format, isToday, isTomorrow } from "date-fns";
import "../styles/set-due-button.scss";

interface SetDueButtonProps {
  onChange: (date: Date | null) => void;
  initialDate: Date | null;
}
const SetDueButton = forwardRef(({ value, onClick }: any, ref: any) => {
  const date = value ? new Date(value) : null;
  // -2 date is null; -1 past; 0 today; 1 tomorrow; 2 future
  const key = date ? compareWithToday(date) : null;
  const dueClass = key !== null ? dueByKey(key) : "";
  const pText = date ? pTextByKey(date, key) : "Set due";
  return (
    <button className={`date ${dueClass}`} onClick={onClick} ref={ref}>
      <TimeSvg />
      <p className="due">{pText}</p>
    </button>
  );
});

const DueDatePicker: React.FC<SetDueButtonProps> = ({
  onChange,
  initialDate,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(initialDate);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState<boolean>(false);

  const clearOnclick = () => {
    setIsDatePickerOpen(true);
    onChange(null);
    setSelectedDate(null);
  };
  const todayOnclick = (date: Date) => {
    setIsDatePickerOpen(true);
    onChange(date);
    setSelectedDate(date);
  };

  return (
    <DatePicker
      calendarClassName="react-datepicker"
      selected={selectedDate}
      onChange={(date) => date && (setSelectedDate(date), onChange(date))}
      customInput={<SetDueButton />}
      showPopperArrow={false}
      popperPlacement="auto"
      closeOnScroll={true}
      disabledKeyboardNavigation
      wrapperClassName="set-due-wrapper"
      open={isDatePickerOpen}
      onCalendarOpen={() => setIsDatePickerOpen(true)}
      onCalendarClose={() => setIsDatePickerOpen(false)}
    >
      <button className="clear" onClick={() => clearOnclick()}>
        Clear
      </button>
      <button className="today" onClick={() => todayOnclick(new Date())}>
        Set Today
      </button>
    </DatePicker>
  );
};

function compareWithToday(date: Date) {
  const today = new Date();

  if (isToday(date)) return 0; // Today
  if (isTomorrow(date)) return 1; // Tomorrow
  return compareAsc(date, today) < 0 ? -1 : 2; // Past or Future
}

function dueByKey(key: number | null) {
  return key === 0
    ? "today"
    : key === 1
    ? "tomorrow"
    : key === -1
    ? "past"
    : "future";
}

function pTextByKey(date: Date, key: number | null) {
  return key === 0
    ? "Today"
    : key === 1
    ? "Tomorrow"
    : format(
        date,
        isSameYear(date, new Date()) ? "eee, MMM d" : "eee, MMM d, yyyy"
      );
}

function isSameYear(date1: Date, date2: Date) {
  return date1.getFullYear() === date2.getFullYear();
}

export default DueDatePicker;
