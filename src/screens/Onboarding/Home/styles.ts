import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
  padding: 0 20px;
  background: ${props => props.theme.colors.background};
`;

export const Logo = styled.Image`
  margin: 100px auto;
`;

export const FormContent = styled.View`
  flex: 1;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  padding-bottom: 50px;
`;

export const Title = styled.Text`
  font-family: 'Work Sans Medium';
  color: ${props => props.theme.colors.textMain};
  padding: 30px 0 0 0;
`;

export const Description = styled.Text`
  font-family: 'Work Sans Regular';
  line-height: 20px;
  color: ${props => props.theme.colors.label};
  padding: 10px 0 30px 0;
`;

export const Button = styled.TouchableOpacity`
  margin: 18px auto 0 auto;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  background: ${props => props.theme.colors.green.dark};
  border-radius: 8px;
`;

export const ButtonText = styled.Text`
  font-family: 'Work Sans Bold';
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const HeaderPage = styled.View`
  background-color: ${props => props.theme.colors.headerBackground};
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;



export const HeaderTitle = styled.Text`
  font-family: 'Work Sans Bold';
  color: #fff;
  /* nao funciona desse jeito */
  letter-spacing: 1px;
`;
