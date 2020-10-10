import React, {useState} from 'react';
import styled from 'styled-components/macro';
import ResultExtraDetails from "./ResultExtraDetails";
import {motion} from 'framer-motion';
import Modal from "react-modal";
import ResultDetails from "./ResultDetails";


const Root = styled(motion.div)`
  border-radius: ${props => props.theme.borderRadius};
  border: 2px solid ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.dark};
  width: 100%;
  padding: 16px 16px 0 16px;
  margin-bottom: 10px;
`;

const modalStyle = {
  overlay: {
    backgroundColor: 'rgb(0, 0, 0, .8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width: '320px',
  },
};

const ResultOverview = props => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <Root initial={{opacity: 0}} animate={{opacity: 1}} key={`${props.item.id}`}>
      <ResultDetails item={props.item} toggleModal={toggleModal}/>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Repo Extra Details Modal"
        style={modalStyle}
      >
        <ResultDetails item={props.item} toggleModal={toggleModal} useCloseIcon={true} />
        <ResultExtraDetails item={props.item} />
      </Modal>
  </Root>
  );
};


export default ResultOverview;
