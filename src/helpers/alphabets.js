const alphabetsAtoZ = () => {
  const charCode = Array.from(new Array(26)).map((ele, indx) => indx + 65);
  const alphabets = charCode.map((ele) => String.fromCharCode(ele));
  return alphabets;
};

export default alphabetsAtoZ;
