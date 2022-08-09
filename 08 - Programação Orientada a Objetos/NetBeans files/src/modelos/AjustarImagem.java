package modelos;

import java.awt.Image;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JLabel;

/**
 *
 * @author maaschmidt
 */
public class AjustarImagem {
        public static void ajustarImagem(String caminho, JLabel label){
	try {
		ImageIcon imageIcon = new ImageIcon(caminho);
		Image img = imageIcon.getImage();
		Image imgScale = img.getScaledInstance(label.getWidth(), label.getHeight(), Image.SCALE_SMOOTH);
		ImageIcon scaledimageIcon = new ImageIcon(imgScale);
		label.setIcon(scaledimageIcon);
	} catch(Exception ex) {}
    }
        
    public static void ajustarButton(String caminho, JButton label){
	try {
		ImageIcon imageIcon = new ImageIcon(caminho);
		Image img = imageIcon.getImage();
		Image imgScale = img.getScaledInstance(label.getWidth(), label.getHeight(), Image.SCALE_SMOOTH);
		ImageIcon scaledimageIcon = new ImageIcon(imgScale);
		label.setIcon(scaledimageIcon);
	} catch(Exception ex) {}
    }
}
