export const getQuestionsData = ({ amount, onSuccess }) => {
  fetch(`https://opentdb.com/api.php?amount=${amount}&difficulty=hard&type=boolean`)
    .then((res) => res.json())
    .then((data) => {
      onSuccess(data.results)
    })
}
