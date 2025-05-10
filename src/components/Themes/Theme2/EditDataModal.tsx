import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

function EditDataModal({ text, onSave, isHeader = false, fieldId, loading }: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState(text);


  useEffect(() => {
    if (isModalOpen) {
      setValue(text);
    }
  }, [text, isModalOpen]);

  const handleSave = () => {
    onSave(value)
      setIsModalOpen(false);
  };
  return (
    <>
      <div className="d-flex align-items-center editable-text">
        {isHeader ? <h1>{text}</h1> : <p>{text}</p>}
        <i
          className="bi bi-pencil-square ms-2 text-blue-600"
          style={{ cursor: 'pointer', fontSize: '1.2rem' }}
          onClick={() => setIsModalOpen(true)}
        ></i>
      </div>

      <div className={`modal fade ${isModalOpen ? 'show d-block' : ''}`} tabIndex={-1} role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Text</h5>
              <button type="button" className="close" onClick={() => setIsModalOpen(false)}>
                <span>×</span>
              </button>
            </div>
            <div className="modal-body">
              {isHeader ? (
                <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="form-control"
                />
              ) : (
                <textarea
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="form-control"
                  rows={4}
                />
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary d-flex align-items-center gap-2"
                onClick={handleSave}
                disabled={loading}
              >
                <div>Save</div>
                {loading && <Loader2 className="animate-spin" />}
              </button>
              <button type="button" className="btn btn-secondary" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && <div className="modal-backdrop fade show"></div>}
    </>
  );
};
export default EditDataModal;