import { SettingsRolePermissionsSettingPermission } from '@/settings/roles/types/SettingsRolePermissionsSettingPermission';
import { TableCell } from '@/ui/layout/table/components/TableCell';
import { TableRow } from '@/ui/layout/table/components/TableRow';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Checkbox } from 'twenty-ui/input';

const StyledName = styled.span`
  color: ${({ theme }) => theme.font.color.primary};
`;

const StyledDescription = styled(StyledName)`
  color: ${({ theme }) => theme.font.color.secondary};
`;

const StyledPermissionCell = styled(TableCell)`
  align-items: center;
  display: flex;
  flex: 1;
  gap: ${({ theme }) => theme.spacing(2)};
`;

const StyledCheckboxCell = styled(TableCell)`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  padding-right: ${({ theme }) => theme.spacing(4)};
`;

const StyledIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

type SettingsRolePermissionsSettingsTableRowProps = {
  permission: SettingsRolePermissionsSettingPermission;
};

export const SettingsRolePermissionsSettingsTableRow = ({
  permission,
}: SettingsRolePermissionsSettingsTableRowProps) => {
  const theme = useTheme();

  return (
    <TableRow key={permission.key} gridAutoColumns="3fr 4fr 24px">
      <StyledPermissionCell>
        <StyledIconContainer>
          <permission.Icon
            size={theme.icon.size.md}
            color={theme.font.color.primary}
            stroke={theme.icon.stroke.sm}
          />
        </StyledIconContainer>
        <StyledName>{permission.name}</StyledName>
      </StyledPermissionCell>
      <StyledPermissionCell>
        <StyledDescription>{permission.description}</StyledDescription>
      </StyledPermissionCell>
      <StyledCheckboxCell>
        <Checkbox checked={permission.value} disabled />
      </StyledCheckboxCell>
    </TableRow>
  );
};
