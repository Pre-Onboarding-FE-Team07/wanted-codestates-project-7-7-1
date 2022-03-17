import styled from 'styled-components';
import { Pagination } from 'antd';
import AddButton from 'components/Main/AddButton';
import FormList from 'components/Main/FormList';

function FormListPage() {
  const forms = [{ id: 1 }];
  return (
    <Container>
      <Wrapper>
        <Label>최신목록</Label>
        <AddButton />
      </Wrapper>
      <FormCard>
        <FormList forms={forms} />
      </FormCard>
      <PageContainer>
        <Pagination defaultCurrent={1} total={50} />
      </PageContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

const Wrapper = styled.section`
  width: 100%;
  padding: 10px 8px;
  background: #ffffff;
  flex: 1;
  margin-bottom: 1rem;
  /* border: 1px solid lightgray; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.label`
  font-size: 1.5rem;
  font-weight: 600;
`;

const FormCard = styled.ul`
  width: 100%;
  height: 100%;
  /* height: 5rem;
  border: 1px solid black;
  list-style: none;
  margin: 1rem 0;
  position: relative; */
`;

const PageContainer = styled.footer`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 381px;
  left: 0px;
`;

export default FormListPage;
