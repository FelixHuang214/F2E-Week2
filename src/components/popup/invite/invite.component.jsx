import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import InputField from "@/components/input-field/input-field.component";
import { SvgButton } from "@/components/button/button.component";
import { ReactComponent as CloseIcon } from "@/assets/icon/close.svg";

import {
  Container,
  SvgButtonPos,
  TitleList,
  TitleWrap,
  Title,
  Body,
  ButtonWrap,
  PopupMask,
  StyledButton,
  NameField,
  StyledInputFiled,
} from "./invite.style";

const initialInvitePersonDetail = {
  email: "",
  firstName: "",
  lastName: "",
};

const PopupBox = () => {
  const [invitePersonDetail, setInvitePersonDetail] = useState(
    initialInvitePersonDetail
  );

  useEffect(() => {
    return () => {
      setInvitePersonDetail(initialInvitePersonDetail);
    };
  }, []);

  return (
    <Container>
      <SvgButtonPos>
        <Link to="/signature">
          <SvgButton variant="secondary" component={<CloseIcon />} />
        </Link>
      </SvgButtonPos>
      <TitleList>
        <TitleWrap>
          <Title>邀請簽署人</Title>
        </TitleWrap>
      </TitleList>
      <Body>
        <InputField
          name="email"
          label="簽署人信箱*"
          placeholder="請輸入電子郵件"
          inputValue={invitePersonDetail}
          setInputValue={setInvitePersonDetail}
        />
        <NameField>
          <StyledInputFiled
            name="lastName"
            label="姓氏*"
            placeholder="請輸入簽署人的姓氏"
            inputValue={invitePersonDetail}
            setInputValue={setInvitePersonDetail}
          />
          <StyledInputFiled
            name="firstName"
            label="名字"
            placeholder="請輸入簽署人的名字"
            inputValue={invitePersonDetail}
            setInputValue={setInvitePersonDetail}
          />
        </NameField>
        <ButtonWrap>
          <StyledButton size="large" variant="primary" disabled>
            儲存
          </StyledButton>
        </ButtonWrap>
      </Body>
    </Container>
  );
};

const InvitePopup = () => {
  return (
    <PopupMask>
      <PopupBox />
    </PopupMask>
  );
};

export default InvitePopup;
