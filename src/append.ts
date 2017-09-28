export default (id: string, value: string) => {
  document.getElementById(id).innerHTML = value;
}