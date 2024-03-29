interface ISvg extends React.FC<React.SVGProps<SVGSVGElement>> {}
// Lithing design utility icons ↓↓↓
export const UpcomingTasksSvg: ISvg = (props) => {
  return (
    <svg
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      viewBox="2 2 48 48"
      className="upcoming-tasks"
      {...props}
    >
      <g>
        <path
          d="M46.5,20h-41C4.7,20,4,20.7,4,21.5V46c0,2.2,1.8,4,4,4h36c2.2,0,4-1.8,4-4V21.5C48,20.7,47.3,20,46.5,20z
		 M19,42c0,0.6-0.4,1-1,1h-4c-0.6,0-1-0.4-1-1v-4c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1V42z M19,32c0,0.6-0.4,1-1,1h-4
		c-0.6,0-1-0.4-1-1v-4c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1V32z M29,42c0,0.6-0.4,1-1,1h-4c-0.6,0-1-0.4-1-1v-4c0-0.6,0.4-1,1-1h4
		c0.6,0,1,0.4,1,1V42z M29,32c0,0.6-0.4,1-1,1h-4c-0.6,0-1-0.4-1-1v-4c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1V32z M39,42
		c0,0.6-0.4,1-1,1h-4c-0.6,0-1-0.4-1-1v-4c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1V42z M39,32c0,0.6-0.4,1-1,1h-4c-0.6,0-1-0.4-1-1v-4
		c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1V32z"
        />
        <path
          d="M44,7h-4h-1V5c0-1.6-1.3-3-3-3l0,0c-1.6,0-3,1.3-3,3v2H19V5c0-1.6-1.3-3-3-3l0,0c-1.6,0-3,1.3-3,3v2h-1H8
		c-2.2,0-4,1.8-4,4v2.5C4,14.3,4.7,15,5.5,15h41c0.8,0,1.5-0.7,1.5-1.5V11C48,8.8,46.2,7,44,7z"
        />
      </g>
    </svg>
  );
};
export const AllTasksSvg: ISvg = (props) => {
  return (
    <svg
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      viewBox="2 2 48 48"
      className="all-tasks"
      {...props}
    >
      <g>
        <path d="M17.5,12h17c0.8,0,1.5-0.7,1.5-1.5V6c0-2.2-1.8-4-4-4H20c-2.2,0-4,1.8-4,4v4.5C16,11.3,16.7,12,17.5,12z" />
        <path
          d="M44,6h-2.5C40.7,6,40,6.7,40,7.5V12c0,2.2-1.8,4-4,4H16c-2.2,0-4-1.8-4-4V7.5C12,6.7,11.3,6,10.5,6H8
 c-2.2,0-4,1.8-4,4v36c0,2.2,1.8,4,4,4h36c2.2,0,4-1.8,4-4V10C48,7.8,46.2,6,44,6z M38,41c0,0.6-0.4,1-1,1H15c-0.6,0-1-0.4-1-1v-2
 c0-0.6,0.4-1,1-1h22c0.6,0,1,0.4,1,1V41z M38,33c0,0.6-0.4,1-1,1H15c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h22c0.6,0,1,0.4,1,1V33z
  M38,25c0,0.6-0.4,1-1,1H15c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h22c0.6,0,1,0.4,1,1V25z"
        />
      </g>
      {props.children}
    </svg>
  );
};
export const ThreeDotsSvg: ISvg = (props) => {
  return (
    <svg
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      viewBox="0 0 52 52"
      className="three-dots"
      {...props}
    >
      <path
        d="M20,44c0-3.3,2.7-6,6-6s6,2.7,6,6s-2.7,6-6,6S20,47.3,20,44z M20,26c0-3.3,2.7-6,6-6s6,2.7,6,6s-2.7,6-6,6
S20,29.3,20,26z M20,8c0-3.3,2.7-6,6-6s6,2.7,6,6s-2.7,6-6,6S20,11.3,20,8z"
      />
      {props.children}
    </svg>
  );
};
export const CompleteSvg: ISvg = (props) => {
  return (
    <svg
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      strokeWidth="2px"
      stroke="white"
      viewBox="0 0 52 52"
      className="complete"
      {...props}
    >
      <g>
        <path
          d="M19.1,42.5L2.6,25.9c-0.6-0.6-0.6-1.6,0-2.2l2.2-2.2c0.6-0.6,1.6-0.6,2.2,0L19.4,34c0.4,0.4,1.1,0.4,1.5,0
		L45.2,9.5c0.6-0.6,1.6-0.6,2.2,0l2.2,2.2c0.6,0.6,0.6,1.6,0,2.2L21.3,42.5C20.7,43.2,19.7,43.2,19.1,42.5z"
        />
      </g>
    </svg>
  );
};
export const DeleteSvg: ISvg = (props) => {
  return (
    <svg
      fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
      width="800px"
      height="800px"
      viewBox="0 0 52 52"
      className="delete"
      {...props}
    >
      <g>
        <path
          d="M45.5,10H33V6c0-2.2-1.8-4-4-4h-6c-2.2,0-4,1.8-4,4v4H6.5C5.7,10,5,10.7,5,11.5v3C5,15.3,5.7,16,6.5,16h39
 c0.8,0,1.5-0.7,1.5-1.5v-3C47,10.7,46.3,10,45.5,10z M23,7c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1v3h-6V7z"
        />
        <path
          d="M41.5,20h-31C9.7,20,9,20.7,9,21.5V45c0,2.8,2.2,5,5,5h24c2.8,0,5-2.2,5-5V21.5C43,20.7,42.3,20,41.5,20z
  M23,42c0,0.6-0.4,1-1,1h-2c-0.6,0-1-0.4-1-1V28c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1V42z M33,42c0,0.6-0.4,1-1,1h-2
 c-0.6,0-1-0.4-1-1V28c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1V42z"
        />
      </g>
    </svg>
  );
};
export const DeletedTasksSvg: ISvg = (props) => {
  return (
    <svg
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      viewBox="0 0 52 52"
      className="deleted-tasks"
      {...props}
    >
      <g>
        <path
          d="M17.2,11.6h17.6c0.9,0,1.6-0.7,1.6-1.6V6.8c0-2.6-2.2-4.8-4.8-4.8H20.4c-2.6,0-4.8,2.2-4.8,4.8V10
		C15.6,10.9,16.3,11.6,17.2,11.6z"
        />
        <path
          d="M43.6,6H42c-0.5,0-0.8,0.3-0.8,0.8V10c0,3.5-2.9,6.4-6.4,6.4H17.2c-3.5,0-6.4-2.9-6.4-6.4V6.8
		C10.8,6.3,10.5,6,10,6H8.4c-2.6,0-4.8,2.2-4.8,4.8v34.4c0,2.6,2.2,4.8,4.8,4.8h35.2c2.6,0,4.8-2.2,4.8-4.8V10.8
		C48.4,8.2,46.2,6,43.6,6z M34.3,42.4c0,1.4-1.1,2.4-2.4,2.4H20.1c-1.4,0-2.4-1.1-2.4-2.4V32.1c0-0.4,0.3-0.7,0.7-0.7h15.2
		c0.4,0,0.7,0.3,0.7,0.7V42.4z M36.3,27.5c0,0.4-0.3,0.7-0.7,0.7H16.5c-0.4,0-0.7-0.3-0.7-0.7V26c0-0.4,0.3-0.7,0.7-0.7h6.1v-2
		c0-1.1,0.9-2,2-2h2.9c1.1,0,2,0.9,2,2v2h6.1c0.4,0,0.7,0.3,0.7,0.7V27.5z"
        />
        <path
          d="M24,34.8h-1c-0.3,0-0.5,0.2-0.5,0.5V41c0,0.3,0.2,0.5,0.5,0.5h1c0.3,0,0.5-0.2,0.5-0.5v-5.7
		C24.5,35,24.3,34.8,24,34.8z"
        />
        <path
          d="M28.9,34.8h-1c-0.3,0-0.5,0.2-0.5,0.5V41c0,0.3,0.2,0.5,0.5,0.5h1c0.3,0,0.5-0.2,0.5-0.5v-5.7
		C29.4,35,29.2,34.8,28.9,34.8z"
        />
        <path d="M27,23.4h-2c-0.3,0-0.5,0.2-0.5,0.5v1.5h2.9v-1.5C27.5,23.6,27.3,23.4,27,23.4z" />
      </g>
    </svg>
  );
};
export const CompletedTasksSvg: ISvg = (props) => {
  return (
    <svg
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      viewBox="2 2 48 48"
      className="completed-tasks"
      {...props}
    >
      <g>
        <path
          d="M17.4,11.6h17.3c0.9,0,1.6-0.7,1.6-1.6V6.8c0-2.6-2.1-4.8-4.7-4.8h-11c-2.6,0-4.7,2.2-4.7,4.8V10
		C15.8,10.9,16.5,11.6,17.4,11.6z"
        />
        <path
          d="M43.3,6h-1.6c-0.5,0-0.8,0.3-0.8,0.8V10c0,3.5-2.8,6.4-6.3,6.4H17.4c-3.5,0-6.3-2.9-6.3-6.4V6.8
		c0-0.5-0.3-0.8-0.8-0.8H8.7C6.1,6,4,8.2,4,10.8v34.4C4,47.8,6.1,50,8.7,50h34.6c2.6,0,4.7-2.2,4.7-4.8V10.8C48,8.2,45.9,6,43.3,6z
		 M36.7,27.1l-12,12c-0.5,0.5-1,0.7-1.6,0.7c-0.5,0-1.2-0.2-1.6-0.7l-5.8-5.8c-0.5-0.5-0.5-1.2,0-1.6l1.6-1.6c0.5-0.5,1.2-0.5,1.6,0
		l4.2,4.2L33.4,24c0.5-0.5,1.2-0.5,1.6,0l1.6,1.6C37.1,25.9,37.1,26.7,36.7,27.1z"
        />
      </g>
    </svg>
  );
};
export const SearchSvg: ISvg = (props) => {
  return (
    <svg
      className="search"
      fill="white"
      width="24px"
      height="24px"
      viewBox="2 2 48 48"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M49.62,45.27,36.22,32a18.9,18.9,0,1,0-34.1-9.2A18.91,18.91,0,0,0,32,36.27l13.3,13.3a1.45,1.45,0,0,0,2.1,0l2.1-2.1A1.68,1.68,0,0,0,49.62,45.27Zm-28.7-11.5a12.9,12.9,0,1,1,12.9-12.9A12.87,12.87,0,0,1,20.92,33.77Z"
        fillRule="evenodd"
      />
      {props.children}
    </svg>
  );
};
export const LeftBarSvg: ISvg = (props) => {
  return (
    <svg
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      viewBox="0 0 52 52"
      {...props}
    >
      <path
        d="M48.5,4h-27C20.7,4,20,4.7,20,5.5v41c0,0.8,0.7,1.5,1.5,1.5h27c0.8,0,1.5-0.7,1.5-1.5v-41
	C50,4.7,49.3,4,48.5,4z"
      />
      <path d="M14.5,4h-11C2.7,4,2,4.7,2,5.5v5C2,11.3,2.7,12,3.5,12h11c0.8,0,1.5-0.7,1.5-1.5v-5C16,4.7,15.3,4,14.5,4z" />
      <path
        d="M14.5,16h-11C2.7,16,2,16.7,2,17.5v5C2,23.3,2.7,24,3.5,24h11c0.8,0,1.5-0.7,1.5-1.5v-5
	C16,16.7,15.3,16,14.5,16z"
      />
      <path
        d="M14.5,28h-11C2.7,28,2,28.7,2,29.5v5C2,35.3,2.7,36,3.5,36h11c0.8,0,1.5-0.7,1.5-1.5v-5
	C16,28.7,15.3,28,14.5,28z"
      />
      <path
        d="M14.5,40h-11C2.7,40,2,40.7,2,41.5v5C2,47.3,2.7,48,3.5,48h11c0.8,0,1.5-0.7,1.5-1.5v-5
	C16,40.7,15.3,40,14.5,40z"
      />
      {props.children}
    </svg>
  );
};
export const HamburgerSvg: ISvg = (props) => {
  return (
    <svg
      className="hamburger"
      fill="white"
      width="24px"
      height="24px"
      viewBox="4 4 44 44"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M46.5,14h-41C4.7,14,4,13.3,4,12.5v-3C4,8.7,4.7,8,5.5,8h41C47.3,8,48,8.7,48,9.5v3C48,13.3,47.3,14,46.5,14
	z"
      />
      <path
        d="M46.5,28.9h-41c-0.8,0-1.5-0.7-1.5-1.5v-3C4,23.7,4.7,23,5.5,23h41c0.8,0,1.5,0.7,1.5,1.5v3
	C48,28.2,47.3,28.9,46.5,28.9z"
      />
      <path
        d="M46.5,44h-41C4.7,44,4,43.3,4,42.5v-3C4,38.7,4.7,38,5.5,38h41c0.8,0,1.5,0.7,1.5,1.5v3
	C48,43.3,47.3,44,46.5,44z"
      />
      {props.children}
    </svg>
  );
};

// Others ↓↓↓
export const SunSvg: ISvg = (props) => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="1 1 22 22"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      className="sun"
      {...props}
    >
      <path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V4C12.75 4.41421 12.4142 4.75 12 4.75C11.5858 4.75 11.25 4.41421 11.25 4V2C11.25 1.58579 11.5858 1.25 12 1.25ZM3.66865 3.71609C3.94815 3.41039 4.42255 3.38915 4.72825 3.66865L6.95026 5.70024C7.25596 5.97974 7.2772 6.45413 6.9977 6.75983C6.7182 7.06553 6.2438 7.08677 5.9381 6.80727L3.71609 4.77569C3.41039 4.49619 3.38915 4.02179 3.66865 3.71609ZM20.3314 3.71609C20.6109 4.02179 20.5896 4.49619 20.2839 4.77569L18.0619 6.80727C17.7562 7.08677 17.2818 7.06553 17.0023 6.75983C16.7228 6.45413 16.744 5.97974 17.0497 5.70024L19.2718 3.66865C19.5775 3.38915 20.0518 3.41039 20.3314 3.71609ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H4C4.41421 11.25 4.75 11.5858 4.75 12C4.75 12.4142 4.41421 12.75 4 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM19.25 12C19.25 11.5858 19.5858 11.25 20 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H20C19.5858 12.75 19.25 12.4142 19.25 12ZM17.0255 17.0252C17.3184 16.7323 17.7933 16.7323 18.0862 17.0252L20.3082 19.2475C20.6011 19.5404 20.601 20.0153 20.3081 20.3082C20.0152 20.6011 19.5403 20.601 19.2475 20.3081L17.0255 18.0858C16.7326 17.7929 16.7326 17.3181 17.0255 17.0252ZM6.97467 17.0253C7.26756 17.3182 7.26756 17.7931 6.97467 18.086L4.75244 20.3082C4.45955 20.6011 3.98468 20.6011 3.69178 20.3082C3.39889 20.0153 3.39889 19.5404 3.69178 19.2476L5.91401 17.0253C6.2069 16.7324 6.68177 16.7324 6.97467 17.0253ZM12 19.25C12.4142 19.25 12.75 19.5858 12.75 20V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V20C11.25 19.5858 11.5858 19.25 12 19.25Z"
      />
    </svg>
  );
};
export const CollapseLeftSvg: ISvg = (props) => {
  return (
    <svg
      className="collapse-left"
      fill="white"
      stroke="white"
      color="white"
      width="24px"
      height="24px"
      viewBox="2.5 3 19 19"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1"
      {...props}
    >
      <path d="M8.70710678,12 L19.5,12 C19.7761424,12 20,12.2238576 20,12.5 C20,12.7761424 19.7761424,13 19.5,13 L8.70710678,13 L11.8535534,16.1464466 C12.0488155,16.3417088 12.0488155,16.6582912 11.8535534,16.8535534 C11.6582912,17.0488155 11.3417088,17.0488155 11.1464466,16.8535534 L7.14644661,12.8535534 C6.95118446,12.6582912 6.95118446,12.3417088 7.14644661,12.1464466 L11.1464466,8.14644661 C11.3417088,7.95118446 11.6582912,7.95118446 11.8535534,8.14644661 C12.0488155,8.34170876 12.0488155,8.65829124 11.8535534,8.85355339 L8.70710678,12 L8.70710678,12 Z M4,5.5 C4,5.22385763 4.22385763,5 4.5,5 C4.77614237,5 5,5.22385763 5,5.5 L5,19.5 C5,19.7761424 4.77614237,20 4.5,20 C4.22385763,20 4,19.7761424 4,19.5 L4,5.5 Z" />{" "}
      {props.children}
    </svg>
  );
};
export const TimeSvg: ISvg = (props) => {
  return (
    <svg
      className="time"
      fill="white"
      width="20px"
      height="20px"
      viewBox="1 1 22 22"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z" />
      <path d="M12 5C11.4477 5 11 5.44771 11 6V12.4667C11 12.4667 11 12.7274 11.1267 12.9235C11.2115 13.0898 11.3437 13.2343 11.5174 13.3346L16.1372 16.0019C16.6155 16.278 17.2271 16.1141 17.5032 15.6358C17.7793 15.1575 17.6155 14.5459 17.1372 14.2698L13 11.8812V6C13 5.44772 12.5523 5 12 5Z" />
      {props.children}
    </svg>
  );
};
export const PlusSvg: ISvg = (props) => {
  return (
    <svg
      className="plus"
      viewBox="0 0 16 16"
      stroke="white"
      strokeWidth="2"
      {...props}
    >
      <line x1="8" y1="1" x2="8" y2="15" strokeLinecap="round" />
      <line x1="1" y1="8" x2="15" y2="8" strokeLinecap="round" />
    </svg>
  );
};
export const TrashSvg: ISvg = (props) => {
  return (
    <svg
      className="trash"
      viewBox="0 0 13 16.5"
      fill="none"
      width="24px"
      height="24px"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M 8.437 2.5 L 8.436 2.5 L 4.563 2.5 C 4.521 2.336 4.5 2.169 4.5 2 C 4.5 0.897 5.397 0 6.5 0 C 7.603 0 8.5 0.897 8.5 2 C 8.5 2.169 8.479 2.337 8.437 2.499 L 8.437 2.5 Z" />
      <path d="M 1 3.5 C 0.448 3.5 0 3.052 0 2.5 C 0 1.948 0.448 1.5 1 1.5 L 12 1.5 C 12.552 1.5 13 1.948 13 2.5 C 13 3.052 12.552 3.5 12 3.5 L 1 3.5 Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M 11 16.5 C 11.552 16.5 12 16.052 12 15.5 L 12 5 C 12 4.448 11.552 4 11 4 L 2 4 C 1.448 4 1 4.448 1 5 L 1 15.5 C 1 16.052 1.448 16.5 2 16.5 L 11 16.5 Z M 9 6.5 C 9 6.224 9.224 6 9.5 6 C 9.776 6 10 6.224 10 6.5 L 10 13.5 C 10 13.776 9.776 14 9.5 14 C 9.224 14 9 13.776 9 13.5 L 9 6.5 Z M 6.5 6 C 6.224 6 6 6.224 6 6.5 L 6 13.5 C 6 13.776 6.224 14 6.5 14 C 6.776 14 7 13.776 7 13.5 L 7 6.5 C 7 6.224 6.776 6 6.5 6 Z M 3 6.5 C 3 6.224 3.224 6 3.5 6 C 3.776 6 4 6.224 4 6.5 L 4 13.5 C 4 13.776 3.776 14 3.5 14 C 3.224 14 3 13.776 3 13.5 L 3 6.5 Z"
      />
      {props.children}
    </svg>
  );
};

export const VerticalPriorityGradient: React.FC = () => (
  <defs>
    <linearGradient
      id="VerticalPriorityGradient"
      gradientTransform="rotate(90)"
    >
      <stop style={{ stopColor: "var(--color-a)" }} offset="0%" />
      <stop style={{ stopColor: "var(--color-b)" }} offset="25%" />
      <stop style={{ stopColor: "var(--color-c)" }} offset="50%" />
      <stop style={{ stopColor: "var(--color-d)" }} offset="75%" />
      <stop style={{ stopColor: "var(--color-e)" }} offset="100%" />
    </linearGradient>
  </defs>
);
