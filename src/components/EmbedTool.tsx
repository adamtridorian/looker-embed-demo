import React, { useState } from 'react' 
import { 
  TextField, 
  Box,
  Button, 
  MenuItem, 
  Select, 
  InputLabel, 
  FormControl, 
  Checkbox, 
  ListItemText, 
  OutlinedInput,
  Typography } 
from '@mui/material' 
import { SelectChangeEvent } from '@mui/material/Select'
import createSignedEmbedUrl, { SignedEmbedOptions } from '../../utils/supabase/signedEmbed'

const EmbedTool: React.FC = () => {
  const [formData, setFormData] = useState<SignedEmbedOptions>({
    secret: '',
    host: 'tridorian.cloud.looker.com',
    embed_url: '/embed/dashboards/thelook::business_pulse',
    external_user_id: '',
    first_name: '',
    last_name: '',
    permissions: [] as string[],
    models: ["thelook"],
    session_length: 900,
    force_logout_login: true,
  }) 

  const [url, setUrl] = useState('')

  const permissionsOptions = [
    'access_data', 
    'see_lookml_dashboards', 
    'see_looks',
    'see_user_dashboards',
    'explore',
    'create_table_calculations',
    'create_custom_fields',
    'can_create_forecast',
    'save_content',
    'send_outgoing_webhook',
    'send_to_s3',
    'send_to_sftp',
    'schedule_look_emails',
    'schedule_external_look_emails',
    'send_to_integration',
    'create_alerts',
    'download_with_limit',
    'download_without_limit',
    'see_sql',
    'clear_cache_refresh',
    'see_drill_overlay',
    'embed_browse_spaces',
    'embed_save_shared_space',
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSelectChange = (e: SelectChangeEvent<string[]>) => {
    setFormData(prevData => ({
      ...prevData,
      permissions: e.target.value as string[]
    }));
  }

  const handleSubmit = () => {
    const { secret, host, embed_url, external_user_id, first_name, last_name, permissions, models, session_length } = formData

    if (!secret || !host || !embed_url || !external_user_id || !first_name || !last_name || !permissions.length || !session_length) {
      alert('Please fill in all required fields.')
      return
    }

    setUrl(createSignedEmbedUrl(formData))
  }

  return (
    <form>
      <TextField
        label="Embed Secret"
        name="secret"
        value={formData.secret}
        type="password"
        onChange={handleInputChange}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Host"
        name="host"
        value={formData.host}
        onChange={handleInputChange}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Embed Path"
        name="embed_url"
        value={formData.embed_url}
        onChange={handleInputChange}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="External User ID"
        name="external_user_id"
        value={formData.external_user_id}
        onChange={handleInputChange}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="First Name"
        name="first_name"
        value={formData.first_name}
        onChange={handleInputChange}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Last Name"
        name="last_name"
        value={formData.last_name}
        onChange={handleInputChange}
        required
        fullWidth
        margin="normal"
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Permissions</InputLabel>
        <Select
          multiple
          required
          value={formData.permissions}
          onChange={handleSelectChange}
          input={<OutlinedInput label="Permissions" />}
          renderValue={(selected) => (selected as string[]).join(', ')}
          name="permissions"
        >
          {permissionsOptions.map((permission) => (
            <MenuItem key={permission} value={permission}>
              <Checkbox checked={formData.permissions.indexOf(permission) > -1} />
              <ListItemText primary={permission} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label="Models"
        name="models"
        value={formData.models}
        onChange={handleInputChange}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Session Length"
        name="session_length"
        type="number"
        value={formData.session_length}
        onChange={handleInputChange}
        required
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Generate Link
      </Button>
      {url && (
        <Box 
          sx={{
          width: '100%',                
          overflowWrap: 'break-word',  
          wordBreak: 'break-word',
          }}>
          <Typography color="primary">
            Generated URL: https://{url}
          </Typography>
        </Box>
      )}
    </form>
  )
}

export default EmbedTool
