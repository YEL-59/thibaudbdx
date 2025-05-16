const Tags = ({ className = "" }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        className={className}
      >
        <path
          d="M4.22013 3.6001H15.6601C16.3401 3.6001 17.1901 4.0701 17.5501 4.6501L21.7301 11.3301C22.1301 11.9801 22.0902 13.0001 21.6302 13.6101L16.4502 20.5101C16.0802 21.0001 15.2801 21.4001 14.6701 21.4001H4.22013C2.47013 21.4001 1.41018 19.4801 2.33018 17.9901L5.10013 13.5601C5.47013 12.9701 5.47013 12.0101 5.10013 11.4201L2.33018 6.9901C1.41018 5.5201 2.48013 3.6001 4.22013 3.6001Z"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};

export default Tags;
