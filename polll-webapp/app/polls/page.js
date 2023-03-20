
const  CreatePoll =()=>{
    return(<>
    <div>
  <form method="post" action="/submit">
    <fieldset>
      <legend>Question</legend>
      <label htmlFor="question">Enter your question:</label><br />
      <input type="text" id="question" name="question" required /><br /><br />
    </fieldset>
    <fieldset>
      <legend>Choices</legend>
      <label htmlFor="choice1">Choice 1:</label><br />
      <input type="text" id="choice1" name="choices[]" required /><br /><br />
      <label htmlFor="choice2">Choice 2:</label><br />
      <input type="text" id="choice2" name="choices[]" required /><br /><br />
      <label htmlFor="choice3">Choice 3:</label><br />
      <input type="text" id="choice3" name="choices[]" /><br /><br />
      <label htmlFor="choice4">Choice 4:</label><br />
      <input type="text" id="choice4" name="choices[]" /><br /><br />
    </fieldset>
    <input type="submit" defaultValue="Submit" />
  </form>
</div>
    </>)
}

export default CreatePoll;