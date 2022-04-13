import EasyCards from './EasyCards';
import MediumCards from './MediumCards';
import DifficultCards from './DifficultCards';
import AllCards from './AllCards';

export default function CardList({
  onDeleteConfirm,
  onTrashClick,
  onKeepConfirm,
  showModal,
  onPinClick,
  onCountRights,
  onCountWrongs,
  easyCards,
  mediumCards,
  difficultCards,
  onShowHide,
  difficulty,
  cards,
  value,
}) {
  if (difficulty === 'easy')
    return (
      <EasyCards
        easyCards={easyCards}
        showModal={showModal}
        onPinClick={onPinClick}
        onCountRights={onCountRights}
        onCountWrongs={onCountWrongs}
        onDeleteConfirm={onDeleteConfirm}
        onKeepConfirm={onKeepConfirm}
        onTrashClick={onTrashClick}
        onShowHide={onShowHide}
        value={value}
      />
    );
  else if (difficulty === 'medium')
    return (
      <MediumCards
        mediumCards={mediumCards}
        showModal={showModal}
        onPinClick={onPinClick}
        onCountRights={onCountRights}
        onCountWrongs={onCountWrongs}
        onDeleteConfirm={onDeleteConfirm}
        onKeepConfirm={onKeepConfirm}
        onTrashClick={onTrashClick}
        onShowHide={onShowHide}
        value={value}
      />
    );
  else if (difficulty === 'difficult')
    return (
      <DifficultCards
        difficultCards={difficultCards}
        showModal={showModal}
        onPinClick={onPinClick}
        onCountRights={onCountRights}
        onCountWrongs={onCountWrongs}
        onDeleteConfirm={onDeleteConfirm}
        onKeepConfirm={onKeepConfirm}
        onTrashClick={onTrashClick}
        onShowHide={onShowHide}
        value={value}
      />
    );
  else
    return (
      <AllCards
        cards={cards}
        showModal={showModal}
        onPinClick={onPinClick}
        onCountRights={onCountRights}
        onCountWrongs={onCountWrongs}
        onDeleteConfirm={onDeleteConfirm}
        onKeepConfirm={onKeepConfirm}
        onTrashClick={onTrashClick}
        onShowHide={onShowHide}
        value={value}
      />
    );
}
