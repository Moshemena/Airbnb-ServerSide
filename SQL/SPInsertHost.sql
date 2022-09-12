-- ================================================
-- Template generated from Template Explorer using:
-- Create Procedure (New Menu).SQL
--
-- Use the Specify Values for Template Parameters 
-- command (Ctrl-Shift-M) to fill in the parameter 
-- values below.
--
-- This block of comments will not be included in
-- the definition of the procedure.
-- ================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		CGroup4
-- Create date: 19.5.2022
-- Description:	Insert Host to DataBase
-- =============================================
CREATE PROCEDURE SP_InsertHost
	-- Add the parameters for the stored procedure here
	@email nvarchar(64),
	@hostSince date,
	@location nvarchar(50),
	@about nvarchar(MAX),
	@responseTime varchar(20),
	@responseRate varchar(20),
	@isSuperHost bit,
	@img nvarchar(256),
	@isVerified bit
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT OFF;

    -- Insert statements for procedure here
	INSERT INTO Hosts (email, hostSince,[location], about, responseTime, responseRate,isSuperHost, img, isVerified)

	VALUES(@email, @hostSince,@location, @about, @responseTime, @responseRate, @isSuperHost, @img, @isVerified)

END
GO
