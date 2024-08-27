import "./EntryForm.css";

export default function EntryForm() {
  return (
    <form className="entry-form">
      <input type="text" className="entry-form__motto" placeholder="Motto" />
      <textarea className="entry-form__notes" placeholder="Notes"></textarea>
      <button type="submit" className="entry-form__button">
        Create
      </button>
    </form>
  );
}
