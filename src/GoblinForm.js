import React from 'react';

export default function GoblinForm(props) {
  function handleSubmit(e) {
    e.preventDefault();

    props.submitGoblin();
    props.setGoblinFormName('');
    props.setGoblinFormHP('');
    props.setGoblinFormColor('');
  }
  return (
    <div className='goblin-form-container quarter'>
      {/* on submit, call the submitGoblin function, passed in as a prop.
      Note that you don't need to define an anonymous function--you can just name the submitGoblin prop here and it will work.
      Take a minute to try and puzzle out why that is: how is this function different from other functions, 
      where you do need to create an anonymous function in the `onClick` or `onSubmit` spot? */}
      <form onSubmit={handleSubmit} className='goblin-form'>
        <label>
            Name
          {/* onChange, use the prop setGoblinFormName to set the parent state */}
          <input required onChange={e => props.setGoblinFormName(e.target.value)} value={props.goblinFormName} />
          {/* note that we're controlling the input's value from parent state */}
        </label>
        <label>
            HP
          {/* onChange, use the prop setGoblinFormHP to set the parent state */}
          <input required type="number" onChange={e => props.setGoblinFormHP(e.target.value)} value={props.goblinFormHP} />
          {/* note that we're controlling the input's value from parent state */}
        </label>
        <label>
            Color
          {/* onChange, use the prop setGoblinFormColor to set the parent state */}
          <select required onChange={e => props.setGoblinFormColor(e.target.value)} value={props.goblinFormColor}>
            {/* note that we're controlling the input's value from parent state */}
            <option value="lightgreen">Green</option>
            <option value="lightblue">Blue</option>
            <option value="pink">Pink</option>
            <option value="purple">Purple</option>
            <option value="orange">Orange</option>
          </select>
        </label>
        <button>Add Goblin</button>

      </form>  
    </div>
  );
}
