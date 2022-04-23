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
  personalCards,
  category,
}) {
  const filteredByDifficulty = difficulty
    ? personalCards.filter(card => card.difficulty === difficulty)
    : personalCards;
  return (
    <Cards
      personalCards={filteredByDifficulty}
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
