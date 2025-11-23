import { Button } from 'antd'
import { DownloadOutlined, RedoOutlined, CheckCircleFilled } from '@ant-design/icons'
import styles from './DownloadButtons.module.scss'

interface DownloadButtonsProps {
  humanReadableTranscriptDriveFileUrl: string
  mappingDriveFileUrl: string
  onReset: () => void
}

function DownloadButtons({
  humanReadableTranscriptDriveFileUrl,
  mappingDriveFileUrl,
  onReset
}: DownloadButtonsProps) {
  const handleDownload = (url: string) => {
    window.open(url, '_blank')
  }

  return (
    <div className={styles.container}>
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <CheckCircleFilled style={{ fontSize: '48px', color: '#52c41a', marginBottom: '16px' }} />
        <h2 style={{ margin: 0, fontSize: '1.5rem' }}>Transcription Complete!</h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '8px' }}>
          Your files are ready for download.
        </p>
      </div>

      <Button
        type="primary"
        size="large"
        block
        icon={<DownloadOutlined />}
        onClick={() => handleDownload(humanReadableTranscriptDriveFileUrl)}
      >
        Download Transcript
      </Button>
      
      <Button
        type="primary"
        size="large"
        block
        icon={<DownloadOutlined />}
        onClick={() => handleDownload(mappingDriveFileUrl)}
      >
        Download Mapping
      </Button>
      
      <div style={{ margin: '8px 0', borderTop: '1px solid rgba(255,255,255,0.1)' }} />

      <Button
        size="large"
        block
        icon={<RedoOutlined />}
        onClick={onReset}
      >
        Submit Another
      </Button>
    </div>
  )
}

export default DownloadButtons
