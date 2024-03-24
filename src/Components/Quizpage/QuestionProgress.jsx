function QuestionProgress() {
  return (
    <div>
      <section>
        <p className="italic text-darkGray">Question X of X</p>
        <h2 className="text-xl font-medium mt-4 text-almostDark">
          What does HTML stand for?
        </h2>
      </section>
      <section className="mt-1">
        <progress value={5} max="10"></progress>
      </section>
    </div>
  );
}

export default QuestionProgress;
