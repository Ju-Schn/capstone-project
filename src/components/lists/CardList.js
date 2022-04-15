import Cards from './Cards';

export default function CardList({
  onDeleteConfirm,
  onTrashClick,
  onKeepConfirm,
  showModal,
  onPinClick,
  onCountRights,
  onCountWrongs,
  onShowHide,
  difficulty,
  cards,
  category,
}) {
  const filteredByDifficulty = difficulty
    ? cards.filter(card => card.difficulty === difficulty)
    : cards;
  return (
    <Cards
      cards={filteredByDifficulty}
      showModal={showModal}
      onPinClick={onPinClick}
      onCountRights={onCountRights}
      onCountWrongs={onCountWrongs}
      onDeleteConfirm={onDeleteConfirm}
      onKeepConfirm={onKeepConfirm}
      onTrashClick={onTrashClick}
      onShowHide={onShowHide}
      category={category}
    />
  );
}
