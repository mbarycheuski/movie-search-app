import { Button, Modal } from "react-bootstrap";
import { forwardRef, useImperativeHandle, useState } from "react";

type ConfirmationModalProps = {
    title: string;
    message?: string;
    onCancel?: () => void;
    onConfirm: () => void;
    confirmText?: string;
    cancelText?: string;
};

export type ConfirmationModalRef = {
    show: (message?: string) => void;
    hide: () => void;
};

const ConfirmationModal = forwardRef<ConfirmationModalRef, ConfirmationModalProps>(({
    title,
    message,
    onCancel,
    onConfirm,
    confirmText = "Confirm",
    cancelText = "Cancel"
}, ref) => {
    const [isVisible, setIsVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState(message);

    const hide = () => setIsVisible(false);

    const handleCancel = () => {
        hide();
        onCancel?.();
    };

    const handleConfirm = () => {
        hide();
        onConfirm();
    };

    useImperativeHandle(ref, () => ({
        show: (newMessage?: string) => {
            setModalMessage(newMessage ?? message);
            setIsVisible(true);
        },
        hide
    }));

    return (
        <Modal
            show={isVisible}
            onHide={handleCancel}
            backdrop="static"
            centered>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {modalMessage}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCancel}>
                    {cancelText}
                </Button>
                <Button variant="danger" onClick={handleConfirm}>
                    {confirmText}
                </Button>
            </Modal.Footer>
        </Modal>
    );
});

export default ConfirmationModal;