interface FormTypes {
  createTodo: () => void
  setText: (a: string) => void
  text: string
}


const Forms: React.FC<FormTypes> = ({createTodo, setText, text}) => {
  return (
    <div className='forms'>
      <input 
      type='text' 
      placeholder='Введите текст...' 
      className='input' 
      value={text}
      onChange={(e) => setText(e.target.value)}
      />
      <button className='add' onClick={createTodo} disabled={!text.trim()}>Добавить</button>
    </div>
  );
}

export default Forms;
