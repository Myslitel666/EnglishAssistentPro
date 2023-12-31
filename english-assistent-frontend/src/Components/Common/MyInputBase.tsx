import InputBase, { InputBaseProps } from '@mui/material/InputBase';
import { useTheme } from '@mui/material';

interface MyInputProps extends InputBaseProps {
    // �������������� ��������, ���� ����������
}

const MyInputBase: React.FC<MyInputProps> = (props) => {

    const theme = useTheme();

    return (
        <InputBase
            {...props}
            className="inputBase"
            sx={{
                transition: 'background-color 1s ease, color 1s ease, border-color 1s ease',
                border: `1px solid ${theme.palette.action.disabled}`,
                borderRadius: '4px',
                padding: '1.2vh',
                '&.Mui-focused': {
                    borderColor: `${theme.palette.primary.main}`, // ���� ����� ��� �����������
                },

                //...props.sx // ��������� ��� ���������� ������ ����� ����� props
            }}
        />
    );
};

export default MyInputBase;
