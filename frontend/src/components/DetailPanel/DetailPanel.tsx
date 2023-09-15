// Styles
import "./styles/DetailPanel.scss"

/**
 * Detail panel component.
 * 
 * @returns Detail panel component
 */
export default function DetailPanel() {
    return (
        <div className="detail-panel">
            <h4>Recent Items</h4>
            <hr />
            <div className="recent-item">
                <h4>Item Name</h4>
                <h4>Item Price</h4>
            </div>
            <hr />
            <div className="recent-item">
                <h4>Item Name</h4>
                <h4>Item Price</h4>
            </div>
            <hr />
            <div className="recent-item">
                <h4>Item Name</h4>
                <h4>Item Price</h4>
            </div>
            <hr />
            <div className="recent-item">
                <h4>Item Name</h4>
                <h4>Item Price</h4>
            </div>
            <hr />
            <div className="recent-item">
                <h4>Item Name</h4>
                <h4>Item Price</h4>
            </div>
        </div>
    );
}