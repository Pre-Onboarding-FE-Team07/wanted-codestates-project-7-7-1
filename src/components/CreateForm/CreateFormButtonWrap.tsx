import { useContext, useState, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { CreateFormContext } from 'context/CreateFormContext';
import { addField } from 'context/actions/createForm';
import Modal from './Modal';
import { FieldType } from 'interfaces/createForm.d';

const checkAllInput = (formData: FieldType[]) => {
  return formData.some((field: FieldType) => {
    console.log(field.label);
    return (field.label && field.label === '') || (field.options && field.options.length === 0);
  });
};
function CreateFormButtonWrap() {
  const { state, dispatch } = useContext(CreateFormContext);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleAddClick = () => dispatch(addField());
  const handleSaveClick = () => {
    if (checkAllInput(state.formData)) {
      alert('작성하지 않은 항목이 있습니다!');
    }
    console.log(
      '제목 입력했나 체크, 필드목록에 빈값있나 체크, 적어도 하나의 필드목록을 생성하셔야 합니다.'
    );
  };
  const toggleModal = useCallback(
    () => setIsModalOpen((isModalOpen) => !isModalOpen),
    [setIsModalOpen]
  );
  return (
    <>
      <AddButton onClick={handleAddClick}>필드 추가하기</AddButton>
      <BottomButtonArea>
        <Button onClick={toggleModal}>폼열기</Button>
        <Button onClick={handleSaveClick} color="blue">
          저장하기
        </Button>
      </BottomButtonArea>
      {isModalOpen && (
        <Modal title="폼 미리보기" toggleModal={toggleModal}>
          <div>프리뷰폼 disalbed</div>
        </Modal>
      )}
    </>
  );
}

export default CreateFormButtonWrap;

const ButtonStyle = styled.button`
  padding: 1rem;
  border-radius: 6px;
  font-weight: 500;
  font-size: 1.2rem;
`;

const AddButton = styled(ButtonStyle)`
  width: 100%;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.blue};
  margin-top: 1rem;
`;

const BottomButtonArea = styled.div`
  padding: 1rem;
  float: right;
`;

const Button = styled(ButtonStyle)`
  margin-left: 6px;
  ${({ color, theme }) =>
    css`
      ${color === 'blue' ? theme.button.blue : theme.button.lightgray};
    `};
`;
