package br.ifpe.tcoins.exception;

public class ResourceAlreadyExistsException extends RuntimeException {

	private static final long serialVersionUID = 8960736689124619282L;

	public ResourceAlreadyExistsException(String msg) {
		super(msg);
	}
}
